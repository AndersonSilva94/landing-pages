import GridTwoColumns from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid two columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ex atque reiciendis excepturi dolore animi, optio sed exercitationem cum non, nulla, quia dolorum corporis iusto! Voluptatibus nulla optio laboriosam quia.`,
    srcImg: 'assets/images/javascript-not-optimized.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
