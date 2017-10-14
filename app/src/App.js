import React from 'react';
import styled from 'styled-components';
import apiRequest from './utils/apiRequest';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    apiRequest().then(data => {
      this.setState({ data: JSON.stringify(data) });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Wrapper>
        <Header>React App Starter</Header>
        <Content>
          <Copy>
            Boilerplate for a React web app.
            <Img src="img/icon128.png" alt="" />
          </Copy>
          <Copy>
            <i className="fa fa-cloud" aria-hidden="true" /> API Result:
          </Copy>
          <Code>{data}</Code>
          <Copy>
            Lorem ipsum dolor sit amet, ipsum facilisis te mei, est at vivendo
            civibus fabellas. Vis magna saepe iudico ei. Ullum altera eos te. Ei
            pri elit semper, at nam autem fastidii, audire dissentiunt ea sed.
            Erat iriure eu mei, velit delicatissimi ei sea.
          </Copy>
          <Copy>
            Aperiri repudiandae usu no, ea mei virtute saperet. Simul
            consectetuer ad eum, has vocent moderatius repudiandae et. Vel te
            sale labores theophrastus, pri et solet persecuti philosophia, pro
            eu equidem dolorum. Usu perfecto mediocrem consetetur et, tempor
            vituperata ius ad. At debet meliore accommodare quo, per nostro
            albucius cu, iusto graeco causae et est.
          </Copy>
          <Copy>
            An cetero phaedrum ullamcorper pro. Vis lobortis praesent ocurreret
            cu, ut aeque nemore oportere eos, tale affert admodum ius ut. Vix
            iriure liberavisse ea. His no illud vidisse definitionem, ut eum
            semper invenire delicatissimi. Eu everti fierent quo. In quo quidam
            debitis adipisci, ne esse clita similique sea. Cu usu utinam
            repudiare.
          </Copy>
          <Copy>
            Ad vidit praesent per. Deleniti incorrupte ne ius. In sale omittam
            nec. Tollit fuisset sed et. Wisi putant singulis mei ex, eu veritus
            noluisse nam. Liber homero albucius an nam.
          </Copy>
          <Copy>
            Id his cibo iisque consulatu, nec ne adipisci postulant. Has in
            eleifend vituperata, cu fabulas ocurreret gloriatur vix. Pro diam
            ponderum periculis id, debet molestie accommodare an per. Ad quidam
            elaboraret mel.
          </Copy>
          <Copy>
            Cu eius denique vix, id aliquam probatus liberavisse mei. Te mollis
            appareat maiestatis sea. Evertitur reprimique per et. Vidisse
            theophrastus in eam, vix no scaevola percipitur.
          </Copy>
          <Copy>
            Pri ad wisi nihil suscipiantur. Pro posse impedit in, ei utroque
            recusabo his. Expetenda efficiantur an ius, quot veritus usu et, at
            vis dico ferri aliquam. Esse ancillae te pro, ei clita reformidans
            has. Nisl consul meliore ut mea, te essent omnesque pri, sed ut
            nonumes indoctum.
          </Copy>
          <Copy>
            Percipit ponderum consectetuer duo ut, eu ius stet suscipit, ad pro
            choro sanctus sadipscing. At vel ludus altera fabellas, vim te
            audire impetus efficiantur. Eos ea aperiri argumentum philosophia.
            Essent dictas conceptam eos eu. Ei vel assum tation signiferumque,
            eos ei ipsum lucilius.
          </Copy>
          <Copy>
            Natum gloriatur mel te, sed ad imperdiet prodesset constituam. Rebum
            concludaturque in vel, ubique dictas causae qui no, nec esse
            suavitate an. An nam menandri maiestatis. Facer inani ei nec, qui
            delicata gubergren ne. At noluisse definiebas efficiantur his, mel
            nobis impedit inermis in, id eirmod reprehendunt his.
          </Copy>
          <Copy>
            Habeo suavitate an pri, nam et scaevola volutpat scriptorem. Ius no
            choro commune, sed minim veritus reprimique ei, an vis odio veniam.
            Ut fuisset phaedrum adipisci sit, ut rebum impetus repudiandae qui.
            Vel ad dicant putent quaeque, tantas bonorum ad eum. Postea meliore
            his te, pro facilisi pertinacia inciderint et. Brute laoreet mel cu,
            per illum minim expetenda ad, est quas torquatos te.
          </Copy>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  font-size: 16pt;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 900px;
`;

const Copy = styled.p`
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  line-height: 1.5;

  @media (max-width: 768px) {
    &:nth-child(even) {
      background-color: #eee;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Img = styled.img`
  float: right;
  height: 100px;

  @media (max-width: 768px) {
    height: 50px;
    margin-top: -15px;
  }
`;

const Code = styled.code`
  display: block;
  width: calc(100% - 40px);
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  line-height: 1.5;
  font-family: monospace;
  white-space: nowrap;
  background-color: #000;
  color: #fff;
  overflow: auto;
`;

export default App;
