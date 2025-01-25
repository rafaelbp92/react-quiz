function StartScreen({ numQuestions, dispatch }) {
  function handleDispatch() {
    dispatch({
      type: "start",
    });
  }

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleDispatch}>
        Let's start!
      </button>
    </div>
  );
}

export default StartScreen;
