export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- styled JSX -</p>
        <button className="button">assssssfga</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }

        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
