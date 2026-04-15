import pytest

def test_hello_world(client):
  response = client.get('/')
  data = response.json
  assert response.status_code == 200
  assert 'hello' in data
  assert 'message' in data 
  assert data['message'].find('healthy') > -1
  
  
def test_zip_returns_documentation(client):
  response = client.get('/zipcode')
  data = response.json
  
  assert response.status_code == 200
  assert 'message' in data
  # the documentation must conatin zipcode in it 
  assert data['message'].find('zipcode') > -1