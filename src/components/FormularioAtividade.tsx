import React, {useEffect,useState} from 'react';
import { View,Text,TextInput,Pressable,StyleSheet,ScrollView } from 'react-native';
import {Atividade,DadosAtividade,Prioridade,hoje,dataValida} from '../types';
import {Cores} from '../theme';
type Props={cores:Cores;edicao:Atividade|null;onSalvar:(dados:DadosAtividade)=>void;onCancelar:()=>void};
export default function FormularioAtividade({cores,edicao,onSalvar,onCancelar}:Props){
 const [titulo,setTitulo]=useState('');const [disciplina,setDisciplina]=useState('');const [descricao,setDescricao]=useState('');const [dataEntrega,setDataEntrega]=useState(hoje());const [prioridade,setPrioridade]=useState<Prioridade>('Média');const [erro,setErro]=useState('');
 useEffect(()=>{setTitulo(edicao?.titulo??'');setDisciplina(edicao?.disciplina??'');setDescricao(edicao?.descricao??'');setDataEntrega(edicao?.dataEntrega??hoje());setPrioridade(edicao?.prioridade??'Média');setErro('');},[edicao]);
 function salvar(){if(titulo.trim().length<3){setErro('Informe um título com pelo menos 3 caracteres.');return;}if(disciplina.trim().length<2){setErro('Informe a disciplina.');return;}if(!descricao.trim()){setErro('Informe uma descrição.');return;}if(!dataValida(dataEntrega)){setErro('Data inválida. Use AAAA-MM-DD, por exemplo 2026-11-10.');return;}onSalvar({titulo:titulo.trim(),disciplina:disciplina.trim(),descricao:descricao.trim(),dataEntrega,prioridade});}
 const inputStyle=[s.input,{color:cores.text,backgroundColor:cores.input,borderColor:cores.line}];
 return <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{paddingBottom:32}}>
  <Text style={[s.heading,{color:cores.text}]}>{edicao?'Editar atividade':'Nova atividade'}</Text><Text style={{color:cores.muted,marginBottom:22}}>Preencha os detalhes do seu planejamento.</Text>
  <Text style={[s.label,{color:cores.text}]}>Título da atividade *</Text><TextInput value={titulo} onChangeText={setTitulo} placeholder="Ex.: Revisar probabilidade" placeholderTextColor={cores.muted} style={inputStyle} maxLength={100}/>
  <Text style={[s.label,{color:cores.text}]}>Disciplina *</Text><TextInput value={disciplina} onChangeText={setDisciplina} placeholder="Ex.: Estatística" placeholderTextColor={cores.muted} style={inputStyle} maxLength={50}/>
  <Text style={[s.label,{color:cores.text}]}>Descrição *</Text><TextInput value={descricao} onChangeText={setDescricao} placeholder="O que você precisa fazer?" placeholderTextColor={cores.muted} style={[...inputStyle,{height:100,textAlignVertical:'top'}]} multiline maxLength={500}/>
  <Text style={[s.label,{color:cores.text}]}>Data de entrega * (AAAA-MM-DD)</Text><TextInput value={dataEntrega} onChangeText={setDataEntrega} placeholder="2026-11-10" placeholderTextColor={cores.muted} style={inputStyle} keyboardType="numbers-and-punctuation" maxLength={10}/>
  <Text style={[s.label,{color:cores.text}]}>Prioridade</Text><View style={s.prioridades}>{(['Baixa','Média','Alta'] as Prioridade[]).map(p=><Pressable key={p} onPress={()=>setPrioridade(p)} style={[s.pill,{backgroundColor:prioridade===p?cores.primary:cores.soft}]}><Text style={{color:prioridade===p?'#FFFFFF':cores.primary,fontWeight:'800'}}>{p}</Text></Pressable>)}</View>
  {!!erro&&<Text accessibilityRole="alert" style={{color:cores.red,marginBottom:12}}>{erro}</Text>}
  <Pressable onPress={salvar} style={[s.save,{backgroundColor:cores.primary}]}><Text style={{color:'#FFFFFF',fontWeight:'800',fontSize:16}}>{edicao?'Salvar alterações':'Adicionar atividade'}</Text></Pressable>
  <Pressable onPress={onCancelar} style={s.cancel}><Text style={{color:cores.muted,fontWeight:'700'}}>Cancelar</Text></Pressable>
 </ScrollView>;
}
const s=StyleSheet.create({heading:{fontSize:25,fontWeight:'900',marginBottom:5},label:{fontSize:13,fontWeight:'800',marginBottom:8},input:{borderWidth:1,borderRadius:13,padding:14,fontSize:15,marginBottom:17,minHeight:50},prioridades:{flexDirection:'row',gap:9,marginBottom:20},pill:{paddingVertical:12,paddingHorizontal:21,borderRadius:12},save:{borderRadius:14,padding:17,alignItems:'center'},cancel:{alignItems:'center',padding:17}});
