describe('main', () => {
  it('passed', async () => {
    const { default: main } = await import('../src/main');
    main();
  })
});
