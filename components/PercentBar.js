export default function PercentBar({ percentage }) {
  const outerBarStyle = "w-full h-1 bg-gray-300 rounded-full";
  const innerBarStyle = "h-full rounded-full";
  const progressBarStyle = `bg-blue-500 ${innerBarStyle}`;

  return (
    <div className="flex w-full gap-4 text-end h-6 self-center">
      <div className="w-1/2 flex my-auto">
        <div className={outerBarStyle}>
          <div
            className={progressBarStyle}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <div className="w-max md:text-xs text-ss font-medium">
        {percentage}% Completed
      </div>
    </div>
  );
}
