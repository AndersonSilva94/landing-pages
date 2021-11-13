import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://www.linkedin.com/in/andssilva/">Feito com ❤ por Anderson Silva</a></p>`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
