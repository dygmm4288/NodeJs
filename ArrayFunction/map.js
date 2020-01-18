const arr = [
	{
		content: "javascript",
		priority: 5
	},
	{
		content: "typescript",
		priority: 5
	},
	{
		content: "react",
		priority: 5
	}
];
console.log(
	arr.map(item => {
		if (item.content === "javascript") item.priority = 10;
		return item;
	})
);
console.log(
	arr.map(item => {
		if (item.content === "react") return;
		return item;
	})
);
