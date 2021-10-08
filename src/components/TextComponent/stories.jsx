import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Facere laboriosam nostrum ab totam deleniti velit culpa,
    eum consequuntur ullam. Eum quod odio molestias sunt
    voluptatem in adipisci vel suscipit hic.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
