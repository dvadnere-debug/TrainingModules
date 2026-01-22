export default function Button() {
  //   const handleClick = () => alert("there's nothing stop clicking you fool");

  //   let count = 0;
  //   const handleClick2 = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} you cliccked me ${count} times`);
  //     } else {
  //       alert(`${name} stop clicking it`);
  //     }
  //   };

  const handleClick = (e) => (e.target.textContent = "hi");
  return <button onDoubleClick={(e) => handleClick(e)}></button>;
}
