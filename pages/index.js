
import styled from 'styled-components';

const NewUser = styled.div`
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://images.unsplash.com/photo-1550345332-d73a0111ad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  height: 100vh;
  background-position: center;
  background-size: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* h1 {
    color: white;
    letter-spacing: .4em;
    animation-name: example;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  } */
  ul {
  list-style: none;
  }
  ul li:before {
    content: '✓  ';
  }
  @media screen and (min-width: 600px) {
    width:50%;
    background: $grey;
  }
  @keyframes example {
  0% {letter-spacing: .4em}
  50% {letter-spacing: 1em}
  100% {letter-spacing: .4em}
}
`

const Banner = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px red solid;
  img {
    height: 50%;
    }
`

const Info = styled.div`
  height: 30%;
  width: 100%;
  border: 1px red solid;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1em;
  li{
    line-height: 2em;
    font-size: 1.2em;
  }
`

const Form = styled.div`
  height: 40%;
  width: 100%;
  border: 1px red solid;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  height: 70px;
  width: 80%;
  // opacity: 0.5;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
  border-style: none;
  font-size: 1.2em;
  text-transform: uppercase;
  margin: 10px;
  transition: 200ms;
  &:focus{
    outline-style: none;
  }
  &:hover {
    cursor: pointer;
    background-color: darken($rgba(255, 255, 255, 0.5), 20%)
  }
  &.active{
    background-color: orange;
  }
  &.actionButton{
    background-color: $action-button;
    height: 30px;
    text-align: center;
    justify-content: center;
    font-size: 1em;
    &:hover{
      background-color: adjust-hue($action-button, 20deg)
    }
  }
`


const newUser = () => {
  return(
    <NewUser>
      <Banner>
        <img src='../static/img/j.svg'></img>
        <h1>
          Jdarwish Fitness
        </h1>
      </Banner>
      <Info>
        <h2>
          Full Access to all of my content
        </h2>
        <ul>
          <li>
            Unlock the full workout experience
          </li>
          <li>
            Watch step by step video instruction
          </li>
          <li>
            Track Your reps, weight and more
          </li>
        </ul>
      </Info>
      <Form>
        <Button>Annual</Button>
        <Button>Monthly</Button>
        <p>See Terms and conditions</p>
        <button>Start Free Trial</button>
      </Form>
    </NewUser>
  )
}

export default newUser;