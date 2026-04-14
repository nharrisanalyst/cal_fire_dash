''' 
"docker commands to run pytest"

docker compose run --rm api-tests bash
# pytest -v
'''

import pytest  
from main import app as flask_app

@pytest.fixture()
def app():
  return flask_app
  
@pytest.fixture()
def client(app):
  return app.test_client()