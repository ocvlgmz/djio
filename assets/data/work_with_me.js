{
    dimensions:[
      {icon:'mdi-badge-account-horizontal', color:'amber accent-4', title:'Customer'},
      {icon:'mdi-offer', color:'blue-grey lighten-1', title:'Product & Services'},
      {icon:'mdi-office-building', color:'red lighten-1', title:'Organization'},
      {icon:'mdi-cogs', color:'grey darken-3', title:'Operations'},
    ];
    workflow: [
      {
        header: require('~/assets/blue-duo-abstract.png'),
        color: '#334455',
        icon: 'mdi-eye',
        step: '1',
        title: 'Assess the situation',
        text: 'I ll start figuring out the "big picture", by collecting data, conduct interviews, surveys and analyse any relevant information to help describe the situation. Other words describing this step: scan, audit, investigate.',
      },
      {
        header: require('~/assets/orange-duo-abstract.png'),
        color: '#706030',
        icon: 'mdi-select-drag',
        step: '2',
        title: 'Frame the challenge',
        text: 'Once the situation is understood, I ll have a deeper look at the challenge presented and seek opportunities of improvements related to customer experience (sales, marketing, delivery, usage and support)',
      },
      {
        header: require('~/assets/brown-duo-abstract.png'),
        color: '#401040',
        icon: 'mdi-briefcase',
        // step: '3',
        title: 'Build the case',
        text: 'Once the context and the element of improvement identified, I ll build a use case with all the KPI required to evaluate the relevancy of the case. Other words to describe this step: request for proposition, business usecase, ',
      },
      {
        header: require('~/assets/blue-duo-abstract.png'),
        color: '#107070',
        icon: 'mdi-offer',
        // step: '4',
        title: 'Formalize the propostion',
        text: 'This is the final step before committing, where the details of the project will be presented, documented and evaluated to the finest grade. Scope, timing, budget, KPI, resources, processes as well as inputs and outputs will be clearly, consicely and elegantly presented for you to decide to go for it.',
      },
    ]
}