export default function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => onChangeInput("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onChangeInput("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChangeInput("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Number of Years</label>
          <input
            type="number"
            required
            value={userInput.numberOfYears}
            onChange={(event) => onChangeInput("numberOfYears", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
