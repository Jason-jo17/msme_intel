from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import companies, gap_analysis, roadmaps, search
from app.services.supabase_service import init_supabase

app = FastAPI(
    title="MSME Intelligence Platform API",
    description="AI-powered gap analysis and roadmap generation for MSMEs",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://*.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize services on startup
@app.on_event("startup")
async def startup_event():
    init_supabase()
    print("✅ Supabase initialized")

# Include API routers
app.include_router(companies.router, prefix="/api/companies", tags=["companies"])
app.include_router(gap_analysis.router, prefix="/api/gap-analysis", tags=["gap-analysis"])
app.include_router(roadmaps.router, prefix="/api/roadmaps", tags=["roadmaps"])
app.include_router(search.router, prefix="/api/search", tags=["search"])
from app.api import sectors, funnel
app.include_router(sectors.router, prefix="/api/sectors", tags=["sectors"])
app.include_router(funnel.router, prefix="/api/funnel", tags=["funnel"])

from app.api.routers import company_funnel
app.include_router(company_funnel.router)

@app.get("/")
def read_root():
    return {
        "message": "MSME Intelligence Platform API",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}
