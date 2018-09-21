<pessoa-list>
    <form onsubmit="{ onSearch }" ref="formulario">
        <div class="card">
            <div class="card-header">
                <div class="card-title h3">
                    <div class="float-left">Pessoas</div>
                    <div class="float-right">
                        <a href="{ url }/criar" class="btn btn-primary">Novo</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr class="bg-secondary">
                            <th style="width:110px;">Status</th>
                            <th>Matricula</th>
                            <th>Nome</th>
                            <th>Identificador</th>
                            <th>Placa</th>
                            <th>Modelo</th>
                            <th style="width:100px;"></th>
                        </tr>
                        <tr class="bg-secondary">
                            <th>
                                <select name="status" aria-label="Status" class="form-select">
                                    <option value="1">Ativo</option>
                                    <option value="0">Inativo</option>
                                </select>
                            </th>
                            <th>
                                <input type="text" aria-label="Matricula" class="form-input" name="matricula" maxlength="100" placeholder="Matricula">
                            </th>
                            <th>
                                <input type="text" aria-label="Nome" class="form-input" name="nome" maxlength="100" placeholder="Nome">
                            </th>
                            <th>
                                <input type="text" aria-label="Identificação" class="form-input" name="identificador" maxlength="100" placeholder="Identificação">
                            </th>
                            <th>
                                <input type="text" aria-label="Placa" class="form-input" name="placa" maxlength="100" placeholder="Placa">
                            </th>
                            <th>
                                <input type="text" aria-label="Modelo" class="form-input" name="modelo" maxlength="100" placeholder="Modelo">
                            </th>
                            <th>
                                <button type="submit" class="btn btn-secondary">
                                    <i class="icon icon-search"></i>
                                    Filtrar
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr each="{ d in grid.data }">
                            <td>
                                <span if="{ d.status == 1 }" class="text-success">Ativo</span>
                                <span if="{ d.status == 0 }" class="text-error">Inativo</span>
                            </td>
                            <td>{ d.matricula }</td>
                            <td>{ d.nome }</td>
                            <td>
                                <span class="chip" each="{ v in d.veiculos }">{ v.identificador }</span>
                            </td>
                            <td>
                                <span class="chip" each="{ v in d.veiculos }">{ v.placa }</span>
                            </td>
                            <td>
                                <span class="chip" each="{ v in d.veiculos }">{ v.modelo }</span>
                            </td>
                            <td>
                                <a href="{ url }/editar/{ d.id }" class="btn btn-link">Alterar</a>
                            </td>
                        </tr>
                        <tr if="{ grid.data.length == 0 }">
                            <td colspan="7">Nenhum registro encontrado.</td>
                        </tr>
                        <tr if="{ loading }">
                            <td colspan="7">
                                <div class="loading loading-lg"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <pagination grid="{ grid }" next="{ onNext }" prev="{ onPrev }"></pagination>
            </div>
        </div>
    </form>
    <script>
        var tag = this;
        tag.url = BASE_URL + '/pessoa'
        tag.grid = opts.grid || [];
        tag.loading = false;

        tag.mixin('ListagemMixin', {
            urlFetch: tag.url + '/buscar',
        });
    </script>
</pessoa-list>