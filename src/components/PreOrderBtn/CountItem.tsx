interface CountItemProps {
  wordSingular: string;
  wordPlural: string;
  count: number;
}

const CountItem = ({ wordSingular, wordPlural, count }: CountItemProps) => {
  return (
    <span>
      {String(count).padStart(2, "0")}
      {/* {count} {count == 1 ? wordSingular : wordPlural} */}
    </span>
  );
};

export default CountItem;
