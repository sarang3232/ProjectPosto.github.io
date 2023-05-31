

(function($) {
    /* "use strict" */
	
 var dlabChartlist = function(){
	
	var screenWidth = $(window).width();	
	
	var chartBar = function(){
		
		var options = {
			  series: [
				{
					name: 'Income',
					data: [50, 18, 70, 40],
					//radius: 12,	
				}, 
				{
				  name: 'Outcome',
				  data: [80, 40, 55, 20]
				}, 
				
			],
				chart: {
				type: 'bar',
				height: 200,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '57%',
				borderRadius:12
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['#80ec67', '#fe7d65'],
			dataLabels: {
			  enabled: false,
			},
			markers: {
		shape: "circle",
		},
		
		
			legend: {
				position: 'top',
				horizontalAlign: 'right', 
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 0,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
			  show: true,
			  width: 4,
			  colors: ['transparent']
			},
			grid: {
				borderColor: '#eee',
			},
			xaxis: {
				
			  categories: ['Sun', 'Mon', 'Tue', 'Wed'],
			  labels: {
			   style: {
				  colors: '#3e4954',
				  fontSize: '13px',
				  fontFamily: 'poppins',
				  fontWeight: 400,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
			  show: false,
			  }
			},
			yaxis: {
				labels: {
					offsetX:-16,
				   style: {
					  colors: '#3e4954',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 400,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			fill: {
			  opacity: 1,
			  colors:['#80ec67', '#fe7d65'],
			},
			tooltip: {
			  y: {
				formatter: function (val) {
				  return "$ " + val + " thousands"
				}
			  }
			},
			responsive: [{
				breakpoint: 1600,
				options: {
					chart: {
						height: 400,
					}
				},
			},
			{
				breakpoint: 575,
				options: {
					chart: {
						height: 250,
					}
				},
			}]
			};

			var chartBar1 = new ApexCharts(document.querySelector("#chartBar"), options);
			chartBar1.render();
	}	

	const acumulacionLink = document.getElementById('acumulacion');
	const cardTitle = document.getElementById('cardTitle');
	const cardContent = document.getElementById('cardContent');
	const reporteEficiencia = document.getElementById('reporteEficiencia');

	acumulacionLink.addEventListener('click', () => {
	  cardTitle.textContent = '%Eficiencia hora';
	  reporteEficiencia.textContent = 'Reporte de la eficiencia por hora';
	  cardContent.innerHTML = `
	  <div class="progress default-progress">
	  <div class="progress-bar bg-gradient-1 progress-animated" style="width: 100%; height:20px;" role="progressbar">
		  <span class="sr-only">100% Complete</span>
	  </div>
  	</div>
  <div class="d-flex align-items-end mt-2 pb-3 justify-content-between">
	  <span>6-7am</span>
	  <span class="fs-16"><span class="text-black pe-2">100%</span>
  </div>
  <div class="progress default-progress mt-4">
	  <div class="progress-bar bg-gradient-2 progress-animated" style="width: 99.26%; height:20px;" role="progressbar">
		  <span class="sr-only">99.26.35% Complete</span>
	  </div>
  </div>
  <div class="d-flex align-items-end mt-2 pb-3 justify-content-between">
	  <span>7-8am</span>
	  <span class="fs-16"><span class="text-black pe-2">99.26.35%</span>
  </div>
  <div class="progress default-progress mt-4">
	  <div class="progress-bar bg-gradient-1 progress-animated" style="width: 98.01%; height:20px;" role="progressbar">
		  <span class="sr-only">99.01% Complete</span>
	  </div>
  </div>
  <div class="d-flex align-items-end mt-2 pb-3 justify-content-between">
	  <span>8-9am</span>
	  <span class="fs-16"><span class="text-black pe-2">99.01%</span>
  </div>
  <div class="progress default-progress mt-4">
	  <div class="progress-bar bg-gradient-2 progress-animated" style="width: 0%; height:20px;" role="progressbar">
		  <span class="sr-only">0% Complete</span>
	  </div>
  </div>
  <div class="d-flex align-items-end mt-2 justify-content-between">
	  <span>9-10am</span>
	  <span class="fs-16"><span class="text-black pe-2">0%</span>
  </div>

  <div class="progress default-progress mt-4">
	  <div class="progress-bar bg-gradient-1 progress-animated" style="width: 59.29%; height:20px;" role="progressbar">
		  <span class="sr-only">59.29% Complete</span>
	  </div>
  </div>
  <div class="d-flex align-items-end mt-2 justify-content-between">
	  <span>10-11am</span>
	  <span class="fs-16"><span class="text-black pe-2">59.29%</span>
  </div>

  <div class="progress default-progress mt-4">
	  <div class="progress-bar bg-gradient-2 progress-animated" style="width: 66.82%; height:20px;" role="progressbar">
		  <span class="sr-only">66.82% Complete</span>
	  </div>
  </div>
  <div class="d-flex align-items-end mt-2 justify-content-between">
	  <span>11-12pm</span>
	  <span class="fs-16"><span class="text-black pe-2">66.82%</span>
  </div>

  <div class="progress default-progress mt-4">
	  <div class="progress-bar bg-gradient-1 progress-animated" style="width: 65.93%; height:20px;" role="progressbar">
		  <span class="sr-only">65.93% Complete</span>
	  </div>
  </div>
  <div class="d-flex align-items-end mt-2 justify-content-between">
	  <span>12-13pm</span>
	  <span class="fs-16"><span class="text-black pe-2">65.93%</span>
  </div>

  <div class="progress default-progress mt-4">
	  <div class="progress-bar bg-gradient-2 progress-animated" style="width: 80.01%; height:20px;" role="progressbar">
		  <span class="sr-only">80.01% Complete</span>
	  </div>
  </div>
  <div class="d-flex align-items-end mt-2 justify-content-between">
	  <span>13-14pm</span>
	  <span class="fs-16"><span class="text-black pe-2">80.01%</span>
  </div>
	  `;
	});

	function actualizarCard(opcion) {
		const cardTitle = document.getElementById('cardTitle');
		const reporteEficiencia = document.getElementById('reporteEficiencia');
		const cardContent = document.getElementById('cardContent');
	  
		if (opcion === 'Acumulacion') {
		  cardTitle.textContent = 'Título de la Card - Acumulación';
		  reporteEficiencia.textContent = 'Reporte de la eficiencia acumulada';
		  cardContent.innerHTML = `
			<h4>Contenido de la Card - Acumulación</h4>
			<p>Este es el contenido de la card para la opción de Acumulación...</p>
		  `;
		} else if (opcion === 'Inicial') {
		  cardTitle.textContent = '%Eficiencia hora';
		  reporteEficiencia.textContent = 'Reporte de la eficiencia por hora';
		  cardContent.innerHTML = `
			<h4>Contenido inicial</h4>
			<p>Este es el contenido inicial de la card...</p>
		  `;
		}
	  }
	  
	
	var chartBar2 = function(){
		
		var options = {
			  series: [
				{
					name: 'Teorica',
					data: [2500, 5000, 7501, 10001, 12501, 15501,17501,20002],
					//radius: 12,	
				}, 
				{
				  name: 'Real',
				  data: [2670, 5293, 7920, 7920, 9501, 10690,12307,14405]
				}, 
				
			],
				chart: {
				type: 'bar',
				height: 400,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '70%',
				borderRadius:10
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['#80ec67', '#fe7d65'],
			dataLabels: {
			  enabled: false,
			},
			markers: {
		shape: "circle",
		},
		
		
			legend: {
				position: 'top',
				horizontalAlign: 'right', 
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 0,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
			  show: true,
			  width: 5,
			  colors: ['transparent']
			},
			grid: {
				borderColor: '#eee',
			},
			xaxis: {
				
			  categories: ['6-7am', '7-8am', '8-9am', '9-10am', '10-11am', '11-12pm','12-13pm','13-14pm'],
			  labels: {
			   style: {
				  colors: '#3e4954',
				  fontSize: '13px',
				  fontFamily: 'poppins',
				  fontWeight: 400,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  title: {
				text: 'Intervalo de horas',
				offsetY: 2, // Ajusta el desplazamiento vertical del título del eje X
				style: {
				  fontSize: '14px',
				  fontWeight: 'bold',
				},
			  },
			  crosshairs: {
			  show: false,
			  }
			},
			yaxis: {
				labels: {
					offsetX:-16,
				   style: {
					  colors: '#3e4954',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 400,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			  title: {
				text: 'Cantidad de cajas',
				offsetX: 8, // Ajusta el desplazamiento horizontal del título del eje Y
				style: {
				  fontSize: '14px',
				  fontWeight: 'bold',
				},
			  },
			  max: 21000,
			},
			fill: {
			  opacity: 1,
			  colors:['#80ec67', '#fe7d65'],
			},
			tooltip: {
			  y: {
				formatter: function (val) {
				  return " " + " Produccion=" + val
				}
			  }
			},
			responsive: [{
				breakpoint: 575,
				options: {
					chart: {
						height: 250,
					}
				},
			}]
			};

			var chartBar1 = new ApexCharts(document.querySelector("#chartBar2"), options);
			chartBar1.render();
	}

	var polarChart = function(){
		 var ctx = document.getElementById("polarChart").getContext('2d');
			Chart.defaults.global.legend.display = false;
			var myChart = new Chart(ctx, {
				type: 'polarArea',
				data: {
					labels: ["Mon", "Tue", "Wed", "Thu"],
					datasets: [{
						backgroundColor: [
							"#496ecc",
							"#68e365",
							"#ffa755",
							"#c8c8c8"
						],
						data: [40, 35, 30, 20]
					}]
				},
				options: {
					maintainAspectRatio: false,
					scale: {
						scaleShowLine:false,
						display:false,
						 pointLabels:{
							fontSize: 0       
						 },
					},
					tooltips:{
						enabled:false,
					}
				}
			});
	}	
	
	var handleCard = function(){
		
		// Vars
		var reloadButton  = document.querySelector( '.change-btn' );
		var reloadIcon     = document.querySelector( '.reload' );
		var reloadEnabled = true;
		var rotation      = 0;
		// Events
		reloadButton.addEventListener('click', function() { reloadClick() });
		// Functions
		function reloadClick() {
		  reloadEnabled = false;
		  rotation += 360;
		  // Eh, this works.
		  reloadIcon.style.webkitTransform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
		  reloadIcon.style.MozTransform  = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
		  reloadIcon.style.transform  = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
		}
		// Show button.
		setTimeout(function() {
		  reloadButton.classList.add('active');
		}, 1);
		
		//Number formatting
		var sliderFormat = document.getElementById('slider-format');
		noUiSlider.create(sliderFormat, {
			start: [20000],
			step: 1000,
			connect: [true, false],
			range: {
				'min': [20000],
				'max': [80000]
			},
			ariaFormat: wNumb({
				decimals: 3
			}),
			format: wNumb({
				decimals: 3,
				thousand: '.',
				//suffix: ' (US $)'
			})
		});

		var inputFormat = document.getElementById('input-format');
		sliderFormat.noUiSlider.on('update', function (values, handle) {
			inputFormat.value = values[handle];
		});

		inputFormat.addEventListener('change', function () {
			sliderFormat.noUiSlider.set(this.value);
		});
		//Number formatting ^
	}
 
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				
				chartBar();
				chartBar2();
				polarChart();
				handleCard();
			},
			
			resize:function(){
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dlabChartlist.load();
		}, 1000); 
		
	});

     

})(jQuery);