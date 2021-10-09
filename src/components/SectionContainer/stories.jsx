import SectionContainer from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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
      <SectionContainer {...args} />
    </div>
  );
};
