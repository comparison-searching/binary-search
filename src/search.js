const search = (delta, a, i, j, v) => {
	while (i < j) {
		// eslint-disable-next-line no-bitwise,unicorn/prefer-math-trunc
		const m = ((i + j) >>> 1) | 0;
		const d = delta(v, a[m]);
		if (d < 0) j = m;
		// eslint-disable-next-line no-bitwise,unicorn/prefer-math-trunc
		else if (d > 0) i = (m + 1) | 0;
		else return m;
	}

	// eslint-disable-next-line no-bitwise
	return ~j;
};

export default search;
