(global.fetch as jest.Mock) = jest.fn(() => ({
    json: () => Promise.resolve({})
}));

export {};
