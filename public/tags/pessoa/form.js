riot.tag2("pessoa-form",'<form onsubmit="{onSubmit}"><div class="card"><div class="card-header"><div class="card-title h3"><div class="float-left">Cadastro Pessoa</div><div class="float-right"><button type="submit" class="btn btn-primary mr-1">Salvar</button><a href="{url}/listar" class="btn btn-secondary">Cancelar</a></div></div></div><div class="card-body"><pessoa-form-dados errors="{errors}" dados="{dados}"></pessoa-form-dados><pessoa-form-veiculos errors="{errors}" veiculos="{dados.veiculos}"></pessoa-form-veiculos><pessoa-form-ocorrencias errors="{errors}" veiculos="{dados.ocorrencias}"></pessoa-form-ocorrencias></div></div></form>',"","",function(s){var o=this;o.url=BASE_URL+"/pessoa",o.errors=riot.observable({}),o.dados=s.dados||{},o.id=s.dados?s.dados.id:"",o.onSubmit=function(s){s.preventDefault();var r=s.target,a=function(s){var o=[],r=[];for(var a in s)if(s.hasOwnProperty(a)&&0==a.indexOf("veiculos_")){var e=a.split("_")[1];r.indexOf(e)<0&&(r.push(e),o.push({id:s["veiculos_"+e+"_id"]||null,identificador:s["veiculos_"+e+"_identificador"],placa:s["veiculos_"+e+"_placa"],cor:s["veiculos_"+e+"_cor"],modelo:s["veiculos_"+e+"_modelo"]})),delete s[a]}return s.veiculos=o,s}(Serialize.toJson(r));Request.post(o.url+"/persistir/"+o.id,JSON.stringify(a),function(s){s.message&&swal(s.message).then(function(){"success"==s.message.type&&(window.location.href=o.url+"/listar")}),o.errors.trigger("atualiza",s.errors)})}});