import { Container, Accordion  } from 'react-bootstrap';

const faqItems = [
    {
        title: 'Where can I buy Snake Secret Service?',
        text: 'You can only mint on our official website , also we are going to provide secondary marketplace through Magic Eden.'
    },
    {
        title: 'How much is the supply?',
        text: 'Our supply will be 444 Snakes.'
    },
    {
        title: 'When is the mint date?',
        text: 'TBA.'
    },
    {
        title: 'Liquidity Pools?',
        text: 'We have allocated funds to provide LPs for $VIPER.'
    },
    {
        title: '$VIPER distribution?',
        text: '$VIPER  can be earned at a rate of 10 $VIPER per 24 hours per staked SsS.'
    },
    {
        title: 'How can I create a Solana wallet?',
        text: 'Go to Phantom, download the Phantom wallet extension. Once the extension is installed, run the program and create a new wallet.'
    },
    {
        title: 'How do I fund my Phantom wallet with SOL?',
        text: 'Go to Coinbase or Binance (any exchange that sells and supports Solana token transfer) and purchase SOL. Once you have SOL, send it over to your SOL address in your Solana wallet'
    },
    {
        title: 'Will this have utility?',
        text: 'This project is only the beginning stage for an amazing way to earn rewards. Details coming soon. '
    },
]

 const Faq = () => {

    return(
        <Container className='accordion-container' id="faq">
            <Accordion>
                {faqItems.map((item,idx) => {
                return(
                    <Accordion.Item eventKey={idx.toString()}>
                    <Accordion.Header style={{margin:'auto' }}>{item.title}</Accordion.Header>
                    <Accordion.Body>
                    {item.text}
                    </Accordion.Body>
                </Accordion.Item>
                )
                })}
            </Accordion>
        </Container>
    )
}

export default(Faq);