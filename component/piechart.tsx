import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip,
  Inject, IAccLoadedEventArgs, AccumulationTheme
} from '@syncfusion/ej2-react-charts';

export let data1: any[] = [
  { x: 'PRESALE', y: 1232131, r: '90%' },
  { x: 'PRIVATE SALE', y: 551500, r: '91%' },
  { x: 'LIQUIDITY POOL', y: 312685, r: '92%' },
  { x: 'AIRDROP', y: 350000, r: '91%' },
  { x: 'MARKETING', y: 301000, r: '95%' },
  { x: 'DEVELOPER', y: 300000, r: '98%' },
  { x: 'EXPANSION', y: 357022, r: '94%' },
  { x: 'REWARD & COMPENSATION POOL', y: 1231123, r: '100%' },
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
    color: "black",
    size: '30px'
};
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <AccumulationChartComponent id='pie-chart' ref={pie => this.pie = pie}
            legendSettings={{
              visible: true,
              reverse: true,
              width: '250', height: '300', border: { width: 2, color: 'red' } 
            }}
            useGroupingSeparator={true} 
            enableSmartLabels={true}
            enableAnimation={true}
            load={this.load.bind(this)}
            tooltip={{ enable: true }}
            title='TOKEN ALLOCATION'
            titleStyle={title}
            
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
                       size: '20px',
                       color: '#ff1d7f'
                   },
         
                   connectorStyle: {
                    //Length of the connector line in pixels
                    length: '50px',
                    //Width of the connector line in pixels
                    width: 3,
                    //dashArray of the connector line
                    dashArray: '5,3',
                    //Color of the connector line
                    color: '#f4429e',
                    //Specifies the type of the connector line either Line or Curve
                    type: 'Curve'
                }
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