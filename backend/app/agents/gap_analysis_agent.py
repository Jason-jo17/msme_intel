import json
from typing import Dict, Any
from app.services.claude_service import ClaudeService

class GapAnalysisAgent:
    
    SYSTEM_PROMPT = """You are an expert business analyst specializing in gap analysis for MSMEs across 6 verticals:
1. HR & Talent
2. Marketing & Sales
3. Operations
4. Finance
5. IP & Innovation
6. Strategy

And 9 strategic dimensions:
1. Access to Market
2. Access to Finance
3. Succession Gap
4. Leadership Appetite
5. Market Saturation
6. Innovation Gap
7. Market Breakthrough
8. Systems & Processes
9. IP Creation

Analyze companies comprehensively and provide actionable insights. Return ONLY valid JSON, no markdown formatting."""
    
    def analyze_company(self, company_data: Dict[str, Any]) -> Dict[str, Any]:
        """Run comprehensive gap analysis on a company"""
        
        prompt = f"""Analyze this company across 6 verticals and 9 dimensions:

COMPANY DATA:
{json.dumps(company_data, indent=2)}

Provide analysis in strict JSON format (no markdown, no code blocks):
{{
  "rag_classification": "green|amber|red",
  "overall_potential_score": 0-100,
  "confidence_level": "high|medium|low",
  "verticals": {{
    "hr_talent": 0-100,
    "marketing_sales": 0-100,
    "operations": 0-100,
    "finance": 0-100,
    "ip_innovation": 0-100,
    "strategy": 0-100
  }},
  "dimensions": {{
    "access_to_market": 0-100,
    "access_to_finance": 0-100,
    "succession_gap": 0-100,
    "leadership_appetite": 0-100,
    "market_saturation": 0-100,
    "innovation_gap": 0-100,
    "market_breakthrough": 0-100,
    "systems_processes": 0-100,
    "ip_creation": 0-100
  }},
  "financial_health_score": 0-100,
  "market_opportunity_score": 0-100,
  "key_strengths": ["strength1", "strength2", "strength3"],
  "critical_gaps": ["gap1", "gap2", "gap3"],
  "top_opportunities": ["opp1", "opp2", "opp3"],
  "priority_actions": ["action1", "action2", "action3"]
}}"""
        
        response_text = ClaudeService.create_message(
            system=self.SYSTEM_PROMPT,
            user_message=prompt,
            max_tokens=4096
        )
        
        # Clean response - remove markdown code blocks if present
        cleaned_response = response_text.strip()
        if cleaned_response.startswith("```json"):
            cleaned_response = cleaned_response[7:]
        if cleaned_response.startswith("```"):
            cleaned_response = cleaned_response[3:]
        if cleaned_response.endswith("```"):
            cleaned_response = cleaned_response[:-3]
        cleaned_response = cleaned_response.strip()
        
        try:
            analysis = json.loads(cleaned_response)
            
            # Transform to database format
            return {
                "rag_score": analysis["rag_classification"],
                "overall_potential_score": analysis["overall_potential_score"],
                "confidence_level": analysis["confidence_level"],
                "hr_talent_score": analysis["verticals"]["hr_talent"],
                "marketing_sales_score": analysis["verticals"]["marketing_sales"],
                "operations_score": analysis["verticals"]["operations"],
                "finance_score": analysis["verticals"]["finance"],
                "ip_innovation_score": analysis["verticals"]["ip_innovation"],
                "strategy_score": analysis["verticals"]["strategy"],
                "access_to_market_score": analysis["dimensions"]["access_to_market"],
                "access_to_finance_score": analysis["dimensions"]["access_to_finance"],
                "succession_gap_score": analysis["dimensions"]["succession_gap"],
                "leadership_appetite_score": analysis["dimensions"]["leadership_appetite"],
                "market_saturation_score": analysis["dimensions"]["market_saturation"],
                "innovation_gap_score": analysis["dimensions"]["innovation_gap"],
                "market_breakthrough_score": analysis["dimensions"]["market_breakthrough"],
                "systems_processes_score": analysis["dimensions"]["systems_processes"],
                "ip_creation_score": analysis["dimensions"]["ip_creation"],
                "financial_health_score": analysis["financial_health_score"],
                "market_opportunity_score": analysis["market_opportunity_score"],
                "key_strengths": analysis["key_strengths"],
                "critical_gaps": analysis["critical_gaps"],
                "top_opportunities": analysis["top_opportunities"],
                "priority_actions": analysis["priority_actions"]
            }
        except json.JSONDecodeError as e:
            print(f"JSON decode error: {e}")
            print(f"Response: {cleaned_response}")
            raise
