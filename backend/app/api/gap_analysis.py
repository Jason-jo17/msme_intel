from fastapi import APIRouter, HTTPException, BackgroundTasks
from typing import List

router = APIRouter()

MOCK_GAP_ALYSIS = {
    "id": "ga-001",
    "company_id": "1",
    "rag_score": "Green",
    "overall_potential_score": 85,
    "digital_maturity": 78,
    "market_reach": 62,
    "innovation_index": 91,
    "key_gaps": ["Manual supply chain tracking", "Lack of cybersecurity protocol"],
    "recommendations": ["Implement cloud-based ERP", "Add 2FA for all employee logins"],
    "analysis_date": "2024-01-17T12:00:00"
}

@router.post("/{company_id}")
async def trigger_gap_analysis(company_id: str, background_tasks: BackgroundTasks):
    return {
        "message": "Gap analysis completed",
        "analysis_id": "ga-001",
        "rag_score": "Green",
        "overall_potential_score": 85
    }

@router.get("/{company_id}")
async def get_latest_gap_analysis(company_id: str):
    return MOCK_GAP_ALYSIS

@router.get("/{company_id}/history")
async def get_gap_analysis_history(company_id: str):
    return [MOCK_GAP_ALYSIS]
