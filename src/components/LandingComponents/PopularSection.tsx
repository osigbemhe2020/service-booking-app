//import TopHead from "./TopHead"

const list = [
  {
    topic:'Beauty & Wellness',
    number:'250+',
    theme:'pink'
  },
  {
    topic:'Home Services',
    number:'180+',
    theme:'blue'
  },
  {
    topic:'Fitness',
    number:'120+',
    theme:'green'
  },
  {
    topic:'Consulting',
    number:'80+',
    theme:'purple'
  },
  {
    topic:'Pet Care',
    number:'75+',
    theme:'brown'
  },
  {
    topic:'Education',
    number:'110+',
    theme:'cream'
  }
]

type itemProps = {
  topic:string,
  number:string,
  theme:string
}

const Item = ({topic,number,theme}:itemProps) => {
  return (
    <div>
      <div>
        <h4>{topic}</h4>
        <p>{number} Services</p>
      </div>
      <div className={theme}>
        <p>Popular</p>
      </div>
    </div>
  )
}

const PopularSection = () => {
  return (
    <section>
      {/*<TopHead />*/}
      <div>
        {list.map((item,index) => (
          <Item 
            key={index}
            topic={item.topic}
            number={item.number}
            theme={item.theme}
            />
        ))}
      </div>
    </section>
  )
}

export default PopularSection