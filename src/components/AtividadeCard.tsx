import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Atividade, dataBR, hoje } from '../types';
import { Cores } from '../theme';
type Props={item:Atividade; cores:Cores; onConcluir:(id:string)=>void;onEditar:(item:Atividade)=>void;onExcluir:(id:string)=>void};
export default function AtividadeCard({item,cores,onConcluir,onEditar,onExcluir}:Props){
 const atrasada=!item.concluida && item.dataEntrega<hoje();
 const corPrioridade=item.prioridade==='Alta'?cores.red:item.prioridade==='Média'?cores.amber:cores.green;
 return <View style={[s.card,{backgroundColor:cores.card,borderColor:cores.line}]}>
  <View style={s.top}><View style={[s.tag,{backgroundColor:cores.soft}]}><Text style={{color:cores.primary,fontWeight:'800',fontSize:11}}>{item.disciplina.toUpperCase()}</Text></View><View style={[s.tag,{backgroundColor:corPrioridade+'1F'}]}><Text style={{color:corPrioridade,fontWeight:'800',fontSize:11}}>● {item.prioridade}</Text></View></View>
  <Text style={[s.title,{color:cores.text,textDecorationLine:item.concluida?'line-through':'none'}]}>{item.titulo}</Text>
  {!!item.descricao && <Text numberOfLines={2} style={[s.desc,{color:cores.muted}]}>{item.descricao}</Text>}
  <View style={s.meta}><Text style={{color:atrasada?cores.red:cores.muted,fontSize:12}}>◷ {dataBR(item.dataEntrega)}{atrasada?' · Atrasada':''}</Text><Text style={{color:item.concluida?cores.green:cores.amber,fontWeight:'700',fontSize:12}}>{item.concluida?'✓ Concluída':'○ Pendente'}</Text></View>
  <View style={[s.actions,{borderTopColor:cores.line}]}>
   <Pressable onPress={()=>onConcluir(item.id)} style={[s.action,{backgroundColor:cores.soft}]}><Text style={{color:cores.primary,fontWeight:'800'}}>{item.concluida?'↶ Reabrir':'✓ Concluir'}</Text></Pressable>
   <Pressable onPress={()=>onEditar(item)} style={s.action}><Text style={{color:cores.muted,fontWeight:'700'}}>✎ Editar</Text></Pressable>
   <Pressable onPress={()=>onExcluir(item.id)} style={s.action}><Text style={{color:cores.red,fontWeight:'700'}}>Excluir</Text></Pressable>
  </View>
 </View>;
}
const s=StyleSheet.create({card:{padding:17,borderRadius:21,borderWidth:1,marginBottom:12},top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:12},tag:{borderRadius:8,paddingHorizontal:10,paddingVertical:6},title:{fontSize:17,fontWeight:'800'},desc:{fontSize:13,lineHeight:19,marginTop:7},meta:{flexDirection:'row',justifyContent:'space-between',marginTop:14,marginBottom:13},actions:{borderTopWidth:1,paddingTop:12,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},action:{paddingHorizontal:12,paddingVertical:11,borderRadius:10}});
