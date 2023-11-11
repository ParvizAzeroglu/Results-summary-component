import styles from "./App.module.css";

export default function App() {
  return (
    <div className="app-container">
      <div className={styles.container}>
        <ResultSide />
        <SummarySide />
      </div>
    </div>
  );
}

function ResultSide() {
  return (
    <div className={styles.resultSide}>
      <h3 className={styles.resultHeader}>Your Result</h3>
      <div className={styles.resultNumber}>76</div>
      <div className={styles.resultText}>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
    </div>
  );
}

function SummarySide() {
  return (
    <div className={styles.summarySide}>
      <h3 className={styles.summaryHeader}>Summary</h3>
      <ul className={styles.summaryList}>
        <SummaryItem
          img="./assets/images/icon-reaction.svg"
          rating={80}
          color="hsl(0, 100%, 67%)"
          backgroundColor="hsla(0, 100%, 67%, 0.1)"
        >
          Reaction
        </SummaryItem>

        <SummaryItem
          img="./assets/images/icon-memory.svg"
          rating={92}
          color="hsl(39, 100%, 56%)"
          backgroundColor="hsla(39, 100%, 56%, 0.1)"
        >
          Memory
        </SummaryItem>

        <SummaryItem
          img="./assets/images/icon-verbal.svg"
          rating={61}
          color="hsl(166, 100%, 37%)"
          backgroundColor="hsla(166, 100%, 37%, 0.1)"
        >
          Verbal
        </SummaryItem>

        <SummaryItem
          img="./assets/images/icon-visual.svg"
          rating={72}
          color="hsl(234, 85%, 45%)"
          backgroundColor="hsla(234, 85%, 45%, 0.1)"
        >
          Visual
        </SummaryItem>
      </ul>
      <button className={styles.summaryButton}>Continue</button>
    </div>
  );
}

function SummaryItem({ img, rating, children, color, backgroundColor }) {
  return (
    <li
      className={styles.summaryListItem}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      <img src={img} />
      <p>{children}</p>
      <span>
        <span>{rating}</span>/100
      </span>
    </li>
  );
}
