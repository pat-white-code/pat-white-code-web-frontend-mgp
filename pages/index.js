
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
  flex-direction: column;
  font-size: 1em;
  li{
    line-height: 2em;
    font-size: 1.2em;
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
      <div>
        <button>Annual</button>
        <button>Monthly</button>
        <p>See Terms and conditions</p>
        <button>Start Free Trial</button>
      </div>
    </NewUser>
  )
}

export default newUser;