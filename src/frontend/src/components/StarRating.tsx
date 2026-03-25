interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
}

const STAR_INDICES = [0, 1, 2, 3, 4];

export function StarRating({ rating, max = 5, size = 16 }: StarRatingProps) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {STAR_INDICES.slice(0, max).map((starNum) => (
        <span
          key={`star-pos-${starNum}`}
          style={{
            fontSize: size,
            color: starNum < rating ? "#F5C24D" : "#24364B",
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
}
