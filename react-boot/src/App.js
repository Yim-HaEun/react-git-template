import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-light py-5">
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      
      <main className="container mt-4">
        <section className="mb-5">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid" src="https://i.pinimg.com/originals/d9/16/e1/d916e1dd702eec0d46497a36c32fdedc.jpg"/>
            </div>
            <div className="col-md-6 mt-5">
              <h2>About</h2>
              <p>이미지 설명입니다.</p>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <div className="row">
            <div className="col-md-6 mt-5">
                <h2>About</h2>
                <p>이미지 설명입니다.</p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="https://i.pinimg.com/originals/c9/03/e2/c903e2e99480ff6319ff0d52708d1cf1.jpg"/>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="mb-4">세션2</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">카드1</h5>
                      <p className="card-text">
                        안녕하세요. 카드1입니다.
                      </p>
                </div>
              </div>
            
            </div>

            <div className="col-md-4 mb-4">
              
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">카드2</h5>
                      <p className="card-text">
                        안녕하세요. 카드2입니다.
                      </p>
                </div>
              </div>
            
            </div>

            <div className="col-md-4 mb-4">
              
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">카드3</h5>
                      <p className="card-text">
                        안녕하세요. 카드3입니다.
                      </p>
                </div>
              </div>
            
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-center mb-4">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email
              </label>
              <input type="email" className="form-control" 
                aria-describedby="emailSmall"/>
                <small id="emailSmall" className="form-text text-muted">이메일</small>
            </div>
            <div className="mb-3">
              <label className="form-label">
                메세지 작성
              </label>
              <textarea rows="4" className="form-control"></textarea>
            </div>
            <button className="btn btn-primary mb-3">
              전송하기
            </button>
          </form>
        </section>
        
        


      </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; 2023 My React Site</p>
      </footer>
    
    
    
    
    </div>
  );
}

export default App;