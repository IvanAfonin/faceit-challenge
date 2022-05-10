export const formatDate = (date : string)=>{
  return new Date(date).toLocaleDateString('en-GB',{
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

}
