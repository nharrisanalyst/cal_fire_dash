import pytest

class TestZipcodes:
  def test_zipcode_returns_city_and_county(self, client):
    response = client.get("/zipcode/95677")
    data = response.json
    assert response.status_code == 200
    assert 'city' in data
    assert 'county' in data
    
     