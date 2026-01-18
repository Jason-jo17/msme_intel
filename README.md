# MSME Intelligence Platform

AI-powered gap analysis and roadmap generation platform for MSMEs (Micro, Small & Medium Enterprises).

## Features

- **Company Management**: Track and manage MSME companies across multiple sectors
- **AI-Powered Gap Analysis**: Comprehensive analysis across 6 verticals and 9 strategic dimensions using Claude Sonnet 4
- **Roadmap Generation**: Automated 6-month growth roadmaps using multiple strategic frameworks (ExO, OKR, Lean Startup, Blue Ocean, JTBD)
- **Vector Search**: Semantic search across sector thesis documents using pgvector
- **Ecosystem Matching**: Match companies with relevant services based on gap analysis

## Technology Stack

### Backend
- **FastAPI** - Modern Python web framework
- **PostgreSQL + pgvector** - Database with vector similarity search
- **Anthropic Claude** - AI for gap analysis and roadmap generation
- **OpenAI Embeddings** - Text embeddings for semantic search
- **Redis + Celery** - Background task processing

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **shadcn/ui + Tailwind CSS** - Modern UI components
- **React Query** - Data fetching and caching
- **Recharts** - Data visualization

## Prerequisites

- Python 3.11+
- Node.js 18+
- Supabase account (or PostgreSQL with pgvector)
- Anthropic API key
- OpenAI API key

## Setup Instructions

### 1. Database Setup

1. Create a Supabase project at https://supabase.com
2. Go to SQL Editor and execute the schema:
   ```sql
   -- Copy contents from database/schema.sql
   ```
3. Note your Supabase URL and API keys

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp ../.env.example .env

# Edit .env with your credentials:
# - SUPABASE_URL
# - SUPABASE_KEY
# - ANTHROPIC_API_KEY
# - OPENAI_API_KEY

# Run the backend
uvicorn app.main:app --reload
```

Backend will be available at http://localhost:8000

API Documentation: http://localhost:8000/docs

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Run the frontend
npm run dev
```

Frontend will be available at http://localhost:3000

### 4. Docker Setup (Optional)

```bash
# From project root
docker-compose up
```

This will start:
- Backend API on port 8000
- Redis on port 6379
- Celery worker
- n8n on port 5678

## Usage

### 1. Add a Company

```bash
curl -X POST http://localhost:8000/api/companies \
  -H "Content-Type: application/json" \
  -d '{
    "name": "TechStartup Inc",
    "stage": "growth",
    "website": "https://techstartup.com",
    "description": "SaaS platform for SMEs",
    "founded_year": 2020,
    "employee_count": 50
  }'
```

### 2. Run Gap Analysis

```bash
curl -X POST http://localhost:8000/api/gap-analysis/{company_id}
```

This will:
- Analyze the company across 6 verticals (HR, Marketing, Operations, Finance, IP, Strategy)
- Evaluate 9 strategic dimensions
- Generate RAG classification (Red/Amber/Green)
- Identify strengths, gaps, and opportunities

### 3. Generate Roadmap

```bash
curl -X POST http://localhost:8000/api/roadmaps/{company_id}
```

This will:
- Create a 6-month roadmap based on gap analysis
- Apply multiple strategic frameworks
- Generate 3 phases with initiatives and milestones
- Include GTM strategy and resource requirements

## Project Structure

```
msme-intelligence-platform/
├── backend/
│   ├── app/
│   │   ├── agents/           # AI agents
│   │   ├── api/              # API endpoints
│   │   ├── models/           # Pydantic models
│   │   ├── services/         # Service layers
│   │   └── main.py           # FastAPI app
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── app/                  # Next.js pages
│   ├── components/           # React components
│   ├── lib/                  # Utilities
│   └── package.json
├── database/
│   └── schema.sql            # Database schema
├── docker-compose.yml
└── README.md
```

## API Endpoints

### Companies
- `GET /api/companies` - List companies
- `GET /api/companies/{id}` - Get company details
- `POST /api/companies` - Create company
- `PUT /api/companies/{id}` - Update company

### Gap Analysis
- `POST /api/gap-analysis/{company_id}` - Trigger analysis
- `GET /api/gap-analysis/{company_id}` - Get latest analysis
- `GET /api/gap-analysis/{company_id}/history` - Get analysis history

### Roadmaps
- `POST /api/roadmaps/{company_id}` - Generate roadmap
- `GET /api/roadmaps/{company_id}` - Get latest roadmap
- `PUT /api/roadmaps/{roadmap_id}` - Update roadmap

### Search
- `POST /api/search/semantic` - Semantic search
- `GET /api/search/companies` - Search companies

## Development

### Running Tests

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

### Code Quality

```bash
# Backend linting
cd backend
black app/
flake8 app/

# Frontend linting
cd frontend
npm run lint
```

## Deployment

### Backend (Railway/Render)

1. Connect your GitHub repository
2. Set environment variables
3. Deploy from main branch

### Frontend (Vercel)

```bash
cd frontend
vercel --prod
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License

## Support

For issues and questions, please open a GitHub issue.
