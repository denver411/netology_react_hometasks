"use strict";

const App = props => {
  return (
    <AppTitle {...props}>
      {props.data.sections.map((item, index) => {
        return <AppSection key={index} {...item} />;
      })}
    </AppTitle>
  );
};

class AppSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  handleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    const openClass = this.state.isVisible ? "open" : null;
    const { head, text } = this.props;
    return (
      <section className={"section " + openClass}>
        <button> toggle </button>
        <h3 onClick={this.handleVisibility} className="sectionhead">
          {head}
        </h3>
        <div className="articlewrap">
          <div className="article"> {text} </div>
        </div>
      </section>
    );
  }
}

const AppTitle = props => {
  return (
    <main className="main">
      <h2 className="title"> {props.data.title} </h2> {props.children}
    </main>
  );
};

const data = {
  sections: [
    {
      head: "Компоненты",
      text:
        "Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой."
    },
    {
      head: "Выучил раз, используй везде!",
      text:
        "После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native."
    },
    {
      head: "Использование JSX",
      text:
        "JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода."
    },
    {
      head: "Еще один заголовок",
      text: "Сюда можно написать кучу текста"
    }
  ],
  title: "React"
};

ReactDOM.render(<App data={data} />, document.getElementById("accordian"));
