import express from 'express'
import {prop_user, prop_play, prop_song, prop_artista} from './objects'



const app = express()

//app.use()

app.get('/', function (req, res) {
    res.send('This is your Music Logger, welcome!')
})

app.get('/user', function (req, res) {
    res.send(
    'Nome: ' + prop_user.nome +
    ' Nome de Usuário: ' + prop_user.nomeUsuario +
    ' Senha: ' + prop_user.senha +
    ' Data de criação: ' + prop_user.dataCriacao)

})

app.get('/playlist', function (req, res) {
    res.send(
    ' Nome da Playlist: ' + prop_play.nomePlay +
    ' Lançamento: ' + prop_play.dataCriacao +
    ' Quantidade de Músicas: ' + prop_play.qtd_musicas)
})

app.get('/song', function (req, res) {
    res.send(
    ' Nome da Música: ' + prop_song.nome +
    ' Data de Lançamento: ' + prop_song.dataCriacao +
    ' Duração: ' + prop_song.tempo_min + ' minutos.')
})

app.get('/artista', function (req, res) {
    res.send(
    ' Nome do Artista ou grupo: ' + prop_artista.nome +
    ' Ano de lançamento: ' + prop_song.dataCriacao +
    ' Quantidade de músicas: ' + prop_artista.qtdMusicas +
    ' País: ' + prop_artista.pais)
})


app.listen(3000, () => console.log('Server is on 3000 PORT'))