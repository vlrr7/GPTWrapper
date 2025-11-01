const possiblerecommendations = [
  "What is the weather?",
  "What is the Laplace Transform",
  "Write Code for me",
];

const onClickInput(useCurrentInput) =>{
  
}
const UserRecommendation = () => {
  return (
    <div>
      {possiblerecommendations.map((message, index) => {
        return <input key={index} >{message}</input>;
      })}
    </div>
  );
};

export default UserRecommendation;
