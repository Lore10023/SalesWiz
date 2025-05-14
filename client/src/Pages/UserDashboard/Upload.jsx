


function Upload(){



  return (
    <section className="Upload--section">
      <div className="Upload--content--box">
        <h2 className="Upload--content--title">Upload your sales data</h2>
          <div className="upload-box">
            <p className="desc">Upload a csv or excel file here</p>
            <input 
            className="Upload--file--box--input" 
            placeholder="Upload a csv or excel file here" 
            type="file"
            accept=".csv,.xls,.xlsx"
            />
          </div>
        <button className="Upload--content--btn">Submit</button>
        <div className="Upload--content--preview">
          <h3 className="h33">Preview of First 10 Rows</h3>
        </div>
      </div>
    </section>
  );
}

export default Upload;