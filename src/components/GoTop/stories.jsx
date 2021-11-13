import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        corporis error dignissimos quo consectetur esse architecto perferendis
        ab, dolores rem eius reiciendis rerum odit voluptates mollitia atque
        unde magnam!
      </p>
      <GoTop {...args} />
    </div>
  );
};
