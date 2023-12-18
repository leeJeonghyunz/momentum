.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
  }
  
  .info {
    position: relative;
    top: -50px;
  }
  
  .todo-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 1000px;
    top: -150px;
    height: 170px;
  }
  
  #todo-form > input {
    width: 350px;
    right: -20px;
  }
  
  #clock {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 100px;
    position: relative;
    top: -30px;
  }
  
  #greeting {
    display: flex;
    justify-content: center;
    font-size: 70px;
    position: relative;
    top: -100px;
  }
  
  #todo-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-weight: 500;
    height: 180px;
  }
  
  #todo-list li {
    display: flex;
    justify-content: space-between;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
    margin-right: 10px;
    font-weight: 800;
  }
  
  #todo-list li span {
    width: 350px;
  }
  
  #login-form {
    position: relative;
    top: -50px;
  }
  
  .wide-box {
    width: 800px;
  }
  
  /* .quote {
    display: flex;
    justify-content: center;
    height: 60px;
    width: 700px;
    background-color: white;
    font-style: italic;
    font-weight: 600;
    font-size: 18px;
    position: relative;
    right: 130px;
    bottom: -80px;
    opacity: 0.5;
  } */
  
  .quote {
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    height: 60px;
    width: 700px;
  }
  
  .quote > div > span {
    display: block;
  }
  
  #weather {
    background-color: rgba(255, 255, 255, 0.8);
    height: 30px;
    width: 160px;
    position: absolute;
    right: 0;
    top: 0;
  }
  