const total = data.reduce((acc, item) => acc + item.y, 0);
const labels={({ datum }) => `${((datum.y / total) * 100).toFixed(0)}%`}