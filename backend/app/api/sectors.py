
from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from typing import List
from app.agents.sector_thesis_agent import SectorThesisAgent
from app.models.sector_thesis import SectorThesis

router = APIRouter()
agent = SectorThesisAgent()

@router.post("/generate", response_model=SectorThesis)
async def generate_sector_thesis(
    sector_name: str = Form(...),
    files: List[UploadFile] = File(...)
):
    """
    Generate a sector thesis from uploaded documents (PDF/TXT).
    """
    try:
        combined_text = ""
        
        # Simple text extraction (mocking PDF parsing for brevity, in prod use PyPDF2/Textract)
        for file in files:
            content = await file.read()
            try:
                # Try decoding as text
                text = content.decode('utf-8')
                combined_text += f"\n--- Source: {file.filename} ---\n{text}\n"
            except UnicodeDecodeError:
                # If binary/PDF, just use filename (or mock extraction)
                # In a real app, integrate unstructured.io or pypdf
                combined_text += f"\n--- Source: {file.filename} ---\n[Content of {file.filename}]\n"

        # Generate Thesis
        thesis = await agent.generate_thesis(sector_name, combined_text)
        return thesis

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
