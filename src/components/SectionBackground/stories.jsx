import SectionBackground from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
          dolorem? Non nulla cupiditate ullam quam quo sunt architecto magni
          omnis, ducimus sit necessitatibus doloribus provident sed ipsa nihil
          facere ratione?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
