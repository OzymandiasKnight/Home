import React from 'react';
import { useEffect, useState } from 'react'
import '../components.css'
import '../App.css'
import NotFoundPage from '../pages/NotFound';
import LoadingScreen from './Loading';

function make_bloc(content: String, key:number) {
  const lines = content.split('\n').slice(1, -1);
  return (
  <div className="bloc" key={key}>
    {lines.map((line_content, index) =>
      <div key={index}>
        <div className="caret"></div>
        <p>
        {line_content}
        </p>
      </div>)}</div>
  );
}

function parsePageFromMarks() {
  let key = 0
  function parseMarks(text: string): React.ReactNode[] {
    const elements: React.ReactNode[] = []
  
    const markRegex = /<markdown>/g
    const tRegex = /<t>(.*?)<\/t>/g
    const stRegex = /<st>(.*?)<\/st>/g
    const pRegex = /<p>(.*?)<\/p>/gs
    const codeRegex = /<code>(.*?)<\/code>/gs
    const blocRegex = /<bloc>(.*?)<\/bloc>/gs
    const showcaseRegex = /<showcase img=([^\s>]+)>/g
    const spaceRegex = /<space>/g
    const spaceSRegex = /<space-s>/g
    const hrRegex = /<hr>/g
    const bpRegex = /<bp>(.*?)<\/bp>/g

    function replaceAndParse(regex: RegExp, render: (match: RegExpExecArray) => React.ReactNode) {
      let rgx_match: RegExpExecArray | null
      let last_ind = 0
      let result: React.ReactNode[] = []
  
      /*Loop through text*/
      while ((rgx_match = regex.exec(text)) !== null) {
        if (rgx_match.index > last_ind) {
          /*Take content of beacon*/
          const plain: string = text.slice(last_ind, rgx_match.index).trim()
          /*Recursive parsing*/
          if (plain) {
            /*Join*/
            result = result.concat(parseMarks(plain))
          }
        }
        /*Add to results*/
        result.push(render(rgx_match))
        last_ind = regex.lastIndex
      }
      if (last_ind < text.length) {
        const content = text.slice(last_ind).trim()
        if (content) {
          result = result.concat(parseMarks(content))
        }
      }
      return result
    }
  
    if (markRegex.test(text)) {
      markRegex.lastIndex = 0
      return replaceAndParse(markRegex, () => {
        return <div className="markdown" key={key++}></div>
      })
    }
    if (blocRegex.test(text)) {
      blocRegex.lastIndex = 0
      return replaceAndParse(blocRegex, match => (
        make_bloc(match[1], key++)
      ))
    }
    if (codeRegex.test(text)) {
      codeRegex.lastIndex = 0
      return replaceAndParse(codeRegex, match => <div className="code-block" key={key++}> {match[1]} </div>)
    }
    if (tRegex.test(text)) {
      tRegex.lastIndex = 0
      return replaceAndParse(tRegex, match => <h1 key={key++}>{match[1]}</h1>)
    }
    if (stRegex.test(text)) {
      stRegex.lastIndex = 0
      return replaceAndParse(stRegex, match => <h2 key={key++}>{match[1]}</h2>)
    }
    if (pRegex.test(text)) {
      pRegex.lastIndex = 0
      return replaceAndParse(pRegex, match => <p key={key++}>{match[1]}</p>)
    }
    if (showcaseRegex.test(text)) {
      showcaseRegex.lastIndex = 0
      return replaceAndParse(showcaseRegex, match => (
        <img src={match[1]} alt="" key={key++} />
      ))
    }
    if (hrRegex.test(text)) {
      hrRegex.lastIndex = 0
      return replaceAndParse(hrRegex, _match => (
        <div className="rule-h" key={key++} />
      ))
    }
    if (spaceRegex.test(text)) {
      spaceRegex.lastIndex = 0
      return replaceAndParse(spaceRegex, () => (
        <div className="space" key={key++}></div>
      ))
    }
    if (spaceSRegex.test(text)) {
      spaceSRegex.lastIndex = 0
      return replaceAndParse(spaceSRegex, () => (
        <div className="space-s" key={key++}></div>
      ))
    }
    if (bpRegex.test(text)) {
      bpRegex.lastIndex = 0
      return replaceAndParse(bpRegex, match => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="bulletpoint" key={key++}></div>
          <p>{match[1]}</p>
        </div>
      ))
    }
  
    //Plain text / No tags
    if (text.trim()) {
      elements.push(<p key={key++}>{text.trim()}</p>)
    }
    return elements
  }

  return parseMarks;

}



function Reader({ txt_path = 'Home/marks/self.txt' }) {
  const [content, setContent] = useState<React.ReactNode[]>([])

  console.log(content)

  useEffect(() => {
    fetch(txt_path)
      .then(res => res.text())
      .then(txt => setContent(parsePageFromMarks()(txt)))
  }, [])

  let valid:boolean = (content.length > 1)
  let loading:boolean = (content.length === 0)
  const mark_valid:React.ReactNode = content[0]
  if (React.isValidElement(mark_valid)) {
    if (mark_valid.type === "div") {
      valid = true;
    }
    else {
      valid = false;
    }
  }
  else {
    valid = false;
  }

  return (
    <div className={'mark-reader' + (loading ? '' : ' fade-in')}>
        {!loading ? (valid ? content :
        <NotFoundPage></NotFoundPage>) : <LoadingScreen></LoadingScreen>}
    </div>
  );
}

export default Reader;