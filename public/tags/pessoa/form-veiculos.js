riot.tag2("pessoa-form-veiculos",'<fieldset><legend><div class="float-left">Veículos</div><div class="float-right"><button type="button" onclick="{adicionarVeiculo}" class="btn btn-link"><i class="icon icon-plus"></i> Adicionar </button></div></legend><table class="table"><thead><tr><th style="width: 20%">Identificador</th><th style="width: 20%">Placa</th><th style="width: 20%">Cor</th><th style="width: 30%">Modelo</th><th style="width: 10%"></th></tr></thead><tbody><tr if="{veiculos}" each="{v, index in veiculos}"><td><input class="form-input" type="text" name="veiculos_{index}_identificador" maxlength="20" riot-value="{v.identificador}" placeholder="Número do Adesivo"></td><td><input class="form-input placa" type="text" name="veiculos_{index}_placa" onblur="{buscaPlaca}" maxlength="8" riot-value="{v.placa}" placeholder="Placa do Veículo" autocomplete="off"></td><td><input class="form-input" type="text" name="veiculos_{index}_cor" maxlength="100" riot-value="{v.cor}"></td><td><input class="form-input" type="text" maxlength="200" name="veiculos_{index}_modelo" riot-value="{v.modelo}"></td><td><button type="button" class="btn btn-error" onclick="{removerVeiculo}"> Remover </button></td></tr><tr if="{veiculos.length <= 0}"><td colspan="5">Nenhum veículo cadastrado.</td></tr></tbody></table></fieldset>',"","",function(t){var e=this;e.url=BASE_URL+"/pessoa",e.errors=t.errors||{},e.errors.on("atualiza",function(t){e.update({errors:t})}),e.veiculos=t.veiculos||[],e.buscaPlaca=function(t){var o=t.target.value;o&&Request.get(e.url+"/buscar-placa/"+o,function(o){var i=e.veiculos.map(function(e){return o&&t.item.v===e&&((e=t.item.v).cor=o.cor,e.modelo=o.modelo),e});e.update({veiculos:i})})},e.adicionarVeiculo=function(t){e.veiculos.push({identificador:"",placa:"",cor:"",modelo:""}),e.update(),VMasker(document.querySelectorAll(".placa")).maskPattern("AAA-9999")},e.removerVeiculo=function(t){e.veiculos.some(function(o){t.item.v===o&&e.veiculos.splice(e.veiculos.indexOf(o),1)}),e.update()}});