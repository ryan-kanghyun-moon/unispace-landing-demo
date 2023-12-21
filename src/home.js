import uniLogo from "./Unisapce Profile Logo_Team(1080_1080px).png";
import bald from "./bald.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Slogan />
      <Usecase />
      <Usecase />
      <Usecase />
      <Usecase />
    </div>
  );
}

function Slogan() {
  //   let summary =
  //     "당신과 같은 사람들이 준비한 시작하기 좋은 공간. 당신이 연결하고, 준비하고, 이루어낼 때까지.";

  return (
    <div className="Slogan">
      <div className="Catch-phrase">
        당신의 시작을 <br />온 힘을 다해 응원합니다.
      </div>
      <div className="Summary">
        당신과 같은 사람들이 준비한 시작하기 좋은 공간. <br />
        당신이 연결하고, 준비하고, 이루어낼 때까지.
      </div>
      <a href="https://youtu.be/dQw4w9WgXcQ?feature=shared">
        <button className="Start-button">시작하기</button>
      </a>
      <div className="Logo">
        <img src={uniLogo} className="UniLogo" alt="유니스페이스 로고" />
      </div>
    </div>
  );
}

function Usecase() {
  let title = "김곽철, 그는 신인가?";
  let explanation =
    "곽철을 더 이상 못 보겠습니다. 곽철이 남자로 보입니다. \
    그리고 그 남자를 사랑하게 됐습니다. \
    이뤄질 수 없다는 걸 알기에 곽철을 사랑하는 심장을 찢어내려 합니다.\
    유니스페이스 여러분들 곽철을 아껴주세요. 그러나 조심하십시오. \
    저처럼 죽을만큼 사랑하게 되면 가슴이 찢어지는 고통을 맛보게 될 겁니다. \
    그와 이뤄질 수 없다는 걸 알기에 눈물만 흘리다 결국 그 웅덩이 속으로 가라앉게 될 겁니다.";
  return (
    <div className="Usecase">
      <div className="text-blob">
        <div className="title">{title}</div>
        <div className="title2">
          김곽철 넌 뭐랄까.. 마치 베를린 같아. <br /> 왜냐하면 치명적인 독일
          수도.
        </div>
        <text className="explanation">{explanation}</text>
      </div>
      <img
        src={bald}
        alt="자라나라 머리머리"
        style={{
          width: "90%",
          borderRadius: "12px",
          justifySelf: "center",
          alignSelf: "center",
        }}
      />
    </div>
  );
}

export default Home;
