from fastapi import APIRouter, HTTPException

router = APIRouter()

MOCK_ROADMAP = {
    "id": "rm-001",
    "company_id": "1",
    "title": "6-Month Digital Transformation Roadmap",
    "executive_summary": "This roadmap focuses on digitizing operations and improving market reach through targeted tech adoption.",
    "frameworks": ["Digital Maturity Framework", "MSME Scaling Strategy"],
    "phases": [
        {"name": "Infrastructure", "timeline": "Month 1-2", "actions": ["Cloud Migration", "Security Audit"]},
        {"name": "Optimization", "timeline": "Month 3-4", "actions": ["ERP Implementation"]},
        {"name": "Growth", "timeline": "Month 5-6", "actions": ["E-commerce Launch"]}
    ],
    "gtm_strategy": "Leverage digital channels for B2B lead generation.",
    "resource_requirements": "Internal IT team + External Cloud Consultant",
    "expected_outcomes": ["30% increase in efficiency", "Lower operational overhead"]
}

@router.post("/{company_id}")
async def generate_roadmap(company_id: str):
    return {
        "message": "Roadmap generated successfully",
        "roadmap_id": "rm-001",
        "roadmap": MOCK_ROADMAP
    }

@router.get("/{company_id}")
async def get_latest_roadmap(company_id: str):
    return MOCK_ROADMAP

@router.put("/{roadmap_id}")
async def update_roadmap(roadmap_id: str, roadmap_data: dict):
    return {"id": roadmap_id, **roadmap_data}
