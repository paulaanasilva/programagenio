INSERT INTO public.curso
(id, nome, descricao)
VALUES('bef836be-9698-441c-8147-2385eec1448f', 'Introdução a programação com Portugol Studio', 'Iniciando a programação com Portugol Studio');

INSERT INTO public.unidade_ensino
(id, nome, descricao, codigo, carga_horaria, id_curso)
VALUES('ce165ca7-df7b-42fd-befc-663288eb8224', 'Unidade de Aprendizagem 1', NULL, 1, 20.0, 'bef836be-9698-441c-8147-2385eec1448f');
INSERT INTO public.unidade_ensino
(id, nome, descricao, codigo, carga_horaria, id_curso)
VALUES('54b9cb98-06bf-4064-ae12-5a6b5263775e', 'Unidade de Aprendizagem 2', NULL, 2, 10.0, 'bef836be-9698-441c-8147-2385eec1448f');
INSERT INTO public.unidade_ensino
(id, nome, descricao, codigo, carga_horaria, id_curso)
VALUES('40467109-6b9b-4c35-8b8d-f04f1896063c', 'Unidade de Aprendizagem 3', NULL, 3, 20.0, 'bef836be-9698-441c-8147-2385eec1448f');
INSERT INTO public.unidade_ensino
(id, nome, descricao, codigo, carga_horaria, id_curso)
VALUES('ddccd95e-1f55-4c78-9022-70a60740c262', 'Unidade de Aprendizagem 4', NULL, 4, 10.0, 'bef836be-9698-441c-8147-2385eec1448f');
INSERT INTO public.unidade_ensino
(id, nome, descricao, codigo, carga_horaria, id_curso)
VALUES('9e605a5e-5c93-4e11-a3b1-fd5e8645de16', 'Unidade de Aprendizagem 5', NULL, 5, 20.0, 'bef836be-9698-441c-8147-2385eec1448f');


INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('3f3a7aec-3583-4ab0-9b6a-9f83e09128cb', 'Entrada e Saída', 20, 'ce165ca7-df7b-42fd-befc-663288eb8224');
INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('a4b5c2a6-4248-48a6-a360-7e843179974b', 'Variaveis e Tipos', 20, 'ce165ca7-df7b-42fd-befc-663288eb8224');
INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('2a8f5207-d186-4648-a0d5-876b7fcf490f', 'Funções', 10, '54b9cb98-06bf-4064-ae12-5a6b5263775e');
INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('b468b6b3-cc41-4e5d-a568-b4b90a5018ec', 'Operações Aritméticas', 10, '54b9cb98-06bf-4064-ae12-5a6b5263775e');
INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('ae0a8107-d6f9-4b5a-99c4-851b1ac99839', 'Operações Condicionais', 10, '40467109-6b9b-4c35-8b8d-f04f1896063c');
INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('d239c6fe-8cc6-4297-81c8-6f7ae034bc1b', 'Operações Lógicas', 10, '40467109-6b9b-4c35-8b8d-f04f1896063c');
INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('08477825-0d91-494f-a402-363c9a60b495', 'Arrays', 15, 'ddccd95e-1f55-4c78-9022-70a60740c262');
INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('a1f5f167-a1b3-41e9-8708-7dacd85642ea', 'Loops', 15, 'ddccd95e-1f55-4c78-9022-70a60740c262');
INSERT INTO public.topico
(id, nome, qtd_pontos, id_unidade_ensino)
VALUES('175e7e68-cd0b-4f82-bf42-ea0a51ab7fb9', 'Bicliotecas', 30, '9e605a5e-5c93-4e11-a3b1-fd5e8645de16');
