<template>
	<div id="myChart" :style="{width: '100%', minHeight: height}"></div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import echarts from 'echarts'
import Mock from 'mockjs'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

var schema = [
	{name: 'date', index: 0, text: '时间'},
	{name: 'CO', index: 1, text: '一氧化碳（CO）'},
    {name: 'CO2', index: 2, text: '二氧化碳（CO2）'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'PM25', index: 4, text: 'PM25'},
    {name: 'VOCs', index: 5, text: 'VOCs'},
    {name: 'PM252', index: 6, text: 'PM252'}
];
  export default{
    data: function () {
      return {
        charts: '',
        height:'',
        option:{
			    backgroundColor: '#404a59',
			    color: [
			        '#dd4444', '#fec42c', '#80F1BE'
			    ],
			    legend: {
			        y: 'top',
			        //data: ['普陀区','徐汇区','闵行区'],
			        data: [],
			        textStyle: {
			            color: '#fff',
			            fontSize: 16
			        }
			    },
			    grid: {
			        x: '10%',
			        x2: 150,
			        y: '18%',
			        y2: '10%'
			    },
			    tooltip: {
			        padding: 10,
			        backgroundColor: '#222',
			        borderColor: '#777',
			        borderWidth: 1,
			        textAlign:'left',
			        formatter: function (obj) {
			            var value = obj.value;
			            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
			                + obj.seriesName + ' ' + value[0] + '日：'
			                + value[0]
			                + '</div>'
			                + '<div style="font-size: 12px;text-align:left;">'
			                + schema[1].text + '：' + value[1] + '</div>'
			                + '<div style="font-size: 12px;text-align:left;">'
			                + schema[2].text + '：' + value[2] + '</div>'
			                + '<div style="font-size: 12px;text-align:left;">'
			                + schema[3].text + '：' + value[3] + '</div>'
			                + '<div style="font-size: 12px;text-align:left;">'
			                + schema[4].text + '：' + value[4] + '</div>'
			                + '<div style="font-size: 12px;text-align:left;">'
			                + schema[5].text + '：' + value[5] + '</div>'
			        }
			    },
			    xAxis: {
			        type: 'value',
			        name: '时间',
			        nameGap: 16,
			        nameTextStyle: {
			            color: '#fff',
			            fontSize: 14
			        },
			        max: 31,
			        splitLine: {
			            show: false
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#eee'
			            }
			        }
			    },
			    yAxis: {
			        type: 'value',
			        name: 'AQI指数',
			        nameLocation: 'end',
			        nameGap: 20,
			        nameTextStyle: {
			            color: '#fff',
			            fontSize: 16
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#eee'
			            }
			        },
			        splitLine: {
			            show: false
			        }
			    },
			    visualMap: [
			         {
			            left: 'right',
			            top: '10%',
			            dimension: 6,
			            min: 0,
			            max: 50,
			            text:['大','小'],//两端的文本['High', 'Low']
			            itemWidth: 30,
			            itemHeight: 120,
			            calculable: true,
			            hoverLink:true,  //打开 hoverLink 功能时，鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
			            seriesIndex:0,//指定取哪个系列的数据，即哪个系列的 series.data  
			            precision: 0.1,   //展式的小数点精度
			            text: ['圆形大小：CO'],
			            textGap: 30,   //两端文字与主体之间的距离
			            textStyle: {
			                color: '#fff'
			            },
			            inRange: {
			                symbolSize: [10, 50]
			            },
			            outOfRange: {
			                symbolSize: [10, 50],
			                color: ['rgba(255,255,255,.2)']
			            },
			            controller: {
			                inRange: {
			                    color: ['#c23531']
			                },
			                outOfRange: {
			                    color: ['#444']
			                }
			            }
			        },
			        /*
			         {
			            left: 'right',
			            bottom: '5%',
			            dimension: 6,
			            min: 0,
			            max: 50,
			            itemHeight: 120,
			            calculable: true,
			            precision: 0.1,
			            text: ['明暗：二氧化硫'],
			            textGap: 30,
			            textStyle: {
			                color: '#fff'
			            },
			            inRange: {
			                colorLightness: [1, 0.5]
			            },
			            outOfRange: {
			                color: ['rgba(255,255,255,.2)']
			            },
			            controller: {
			                inRange: {
			                    color: ['#c23531']
			                },
			                outOfRange: {
			                    color: ['#444']
			                }
			            }
			        }
			        */
			    ],
			    series: [
			        /*
			        {
			            name: '徐汇区',
			            type: 'scatter',
			            itemStyle: {
						    normal: {
						        opacity: 0.8,
						        shadowBlur: 10,
						        shadowOffsetX: 0,
						        shadowOffsetY: 0,
						        shadowColor: 'rgba(0, 0, 0, 0.5)'
						    }
						},
			            data: []
			        },
			        {
			            name: '闵行区',
			            type: 'scatter',
			            itemStyle: {
						    normal: {
						        opacity: 0.8,
						        shadowBlur: 10,
						        shadowOffsetX: 0,
						        shadowOffsetY: 0,
						        shadowColor: 'rgba(0, 0, 0, 0.5)'
						    }
						},
			            data: []
			        }
			        */
			        
			    ]
			},
        

      }
    },
    mounted() {
      //this.drawLine()
      
    },
    created() {
    	this.height = document.documentElement.clientHeight + 'px'
    	
    	//this.GetData()
    	this.GetRegionList()

    },
    computed: {
    	...mapGetters([
	      'getRegionList'
	    ]),
      
    },
    watch: {
    	option: {
			handler(newVal, oldVal) {
				if (this.chart) {
					if (newVal) {
						alert('new')
						this.chart.setOption(newVal);
					} else {
						this.chart.setOption(oldVal);
					}
				} else {
					this.drawLine();
				}
			},
			deep: true //对象内部属性的监听，关键。
		}
      
    },
    components: {
      

    },
    methods: {
    	...mapActions([
	      'UpdateRegionList'
	    ]),
    	drawLine(){
    		console.log('draw---')
    		console.log(this.option)
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			myChart.setOption(this.option);
    	},
    	MockData(){
    		axios.get('static/json/charts.json',
			).then((res)=> {
				var Index2 = Mock.mock({
					'i|0-3': 1
				})
				var Index = 0
				this.option.series[0].data = res.data.Info[Index.i].PT
				this.option.series[1].data = res.data.Info[Index.i].XH
				this.option.series[2].data = res.data.Info[Index.i].MH
				this.SetTimeoutOne()
			}).catch((error)=> {
				console.log(error)
			})
		},
		SetTimeoutOne(){
			setTimeout(()=> {
				this.MockData()
			}, 2000);
		},
    	GetData(){
			axios.get('static/json/charts.json',
			).then((res)=> {
				this.option.series[0].data = res.data.Info[0].PT
				this.option.series[1].data = res.data.Info[0].XH
				this.option.series[2].data = res.data.Info[0].MH

				//this.SetTimeoutOne()

			}).catch((error)=> {
				console.log(error)
			})
    	},

        ConnectFn(){
        	let That = this
        	var stompClient = null;
        	var socket = new SockJS("http://205.168.1.112:8081/webSoket/endpointWisely"); 
	        //链接SockJS 的endpoint 名称为"/endpointWisely"
	        stompClient = Stomp.over(socket);//使用stomp子协议的WebSocket 客户端
	        stompClient.connect({}, function(frame) {//链接Web Socket的服务端。
	            //setConnected(true);
	            //console.log('Connected: ' + frame);
	            stompClient.subscribe('/topic/getResponse', function(respnose){ //订阅/topic/getResponse 目标发送的消息。这个是在控制器的@SendTo中定义的。
	            	console.log('返回------------------------------------')
	            	//横坐标 0 纵坐标 1 大小 最后第二个
	            	let ResBody = JSON.parse(respnose.body)
	            	let List = JSON.parse(ResBody.responseMessage)
	            	let ComparedList = {}
	            	let temp = List.hkyList //List.hkyList.slice(0,31)
	            	
	            	temp.map((item,idx)=>{
	            		let TempObj = []
	            		if(item.address in ComparedList){  //已存在这个区直接push
	            			TempObj.push(ComparedList[item.address].length + 1)
	            			TempObj.push(item.CO)
	            			TempObj.push(item.CO2)
	            			TempObj.push(item.PM10)
	            			TempObj.push(item.PM25)
	            			TempObj.push(item.VOCs)
	            			TempObj.push(item.CO)
	            			ComparedList[item.address].push(TempObj)
	            		}else{                             //不存在这个区加区后push
	            			//添加That.option.series
	            			let seriesItem = {
					            name: item.address,
					            type: 'scatter',
					            itemStyle: {
								    normal: {
								        opacity: 0.8,
								        shadowBlur: 10,
								        shadowOffsetX: 0,
								        shadowOffsetY: 0,
								        shadowColor: 'rgba(0, 0, 0, 0.5)'
								    }
								},
					            data: []
					        }
	            			That.option.series.push(seriesItem)
	            			ComparedList[item.address]=[]
	            			TempObj.push(1)
	            			TempObj.push(item.CO)
	            			TempObj.push(item.CO2)
	            			TempObj.push(item.PM10)
	            			TempObj.push(item.PM25)
	            			TempObj.push(item.VOCs)
	            			TempObj.push(item.CO)
	            			ComparedList[item.address].push(TempObj)
	            		}
	            	})
	            	That.option.series.map((seriesItem,seriesIteIdx)=>{
	            		if(seriesItem.name in ComparedList){
	            			seriesItem.data = ComparedList[seriesItem.name]
	            		}
	            	})
	            	console.log(ComparedList)
	            	console.log(That.option.series)
	            	That.drawLine()
	            	
	            });
	        });
	    },
	    GetRegionList(){
	    	console.log(this.$store.state.RegionList)
	    	if(this.$store.state.RegionList.length==0){
	    		axios.get('http://205.168.1.112:8081/webSoket/cityList',
				).then((res)=> {
					let tempCityList = []
					res.data.cityList.map((item,idx)=>{
						tempCityList.push(item.city)
					})
					this.UpdateRegionList(tempCityList)
					this.option.legend.data = tempCityList
					this.GetRegionList()
				}).catch((error)=> {
					console.log(error)
				})
	    	}else{
	    		this.ConnectFn()
	    	}
	    	
	    }
        

    }
  }
</script>
<style lang="scss">
.LineChart{
  width: 100%;
  display: block;
  float: left;
  clear: both;
}
</style>