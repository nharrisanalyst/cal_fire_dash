import pytest

def test_avg(client):
  response = client.get('/data')
  data = response.json
  
  assert response.status_code == 200
  assert 'message' in data
  assert data['message'].find('data') > -1
  assert "avg" in data
  assert "zipcode" in data  
  