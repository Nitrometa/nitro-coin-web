import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip,
  Inject, IAccLoadedEventArgs, AccumulationTheme
} from '@syncfusion/ej2-react-charts';

export let data1: any[] = [
  { x: 'PRESALE (90%)', y: 100000, r: '90%' },
  { x: 'PRIVATE SALE (90%)', y: 100000, r: '91%' },
  { x: 'LIQUIDITY POOL (90%)', y: 100000, r: '92%' },
  { x: 'AIRDROP (90%)', y: 100000, r: '91%' },
  { x: 'MARKETING (90%)', y: 130000, r: '95%' },
  { x: 'DEVELOPER (90%)', y: 100000, r: '98%' },
  { x: 'EXPANSION (90%)', y: 100000, r: '94%' },
  { x: 'REWARD & COMPENSATION POOL (90%)', y: 100000, r: '98%' },
];
export class PieRadius extends React.Component {
  public pie: AccumulationChartComponent;
  render() {
  const palettes = [
      '#00fdfc',
      '#0faefc',
      '#db6afa',
      '#38b9a2',
      '#f93651',
      '#05a281',
      '#f1f668',
      '#e82ffb',
  ];
  const white = ['#07071c']
  const title = {
    fontFamily: "sans-serif",
    fontWeight: 'bold',
    color: "#fff",
    size: '40px',
};
const subTitle = {
  fontWeight: 'bold',
  size: '60px',
};

    return (
      <div className="text-center w-full mb-4 my-44">
        <div className="flex justify-center items-center">
          <AccumulationChartComponent className='' id='pie-chart' ref={pie => this.pie = pie}
            legendSettings={{
              visible: false,
              reverse: true,
              background: "#111021",  
              width: '270', height: '250', border: { width: 3, color: '#0197a9' }
            }}
            background='#07071c'
            useGroupingSeparator={true} 
            enableSmartLabels={true}
            enableAnimation={true}
            load={this.load.bind(this)}
            tooltip={{ enable: true }}
            title='TOKEN ALLOCATION'
            titleStyle={title}
            subTitle='&nbsp;'
            subTitleStyle={subTitle}
            
          >
            <Inject  services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
            <AccumulationSeriesCollectionDirective >
              <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' innerRadius='10%'
                dataLabel={{
                   visible: true,
                   position: 'Outside', 
                   name: 'x',
                   font: {
                       fontWeight: '600',
                       size: '15px',
                       color: '#fff',
                   },
                
                }}
                radius='r'
                palettes={palettes}
              >
              </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>

        </div>
      </div>
    )
  }
      
  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
    replace(/-dark/i, "Dark") as AccumulationTheme;
  };
     
}