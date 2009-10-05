#!/usr/bin/env ruby
$YOURCODE = STDIN.read

print <<-HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<title>Run Javascript #{ENV['TM_FILENAME']}</title>
</head>
<body>
HTML


requirements = []
requirements << ['tm-file://'+ ENV['TM_BUNDLE_SUPPORT']+ '/run_js.js?1234']
requirements << ENV['TM_WEB_FRAMEWORK'] if ENV['TM_WEB_FRAMEWORK']
requirements += $YOURCODE.scan(/@require (?:"([^"]*)"|'([^']*)')/).map { |e| e.first || e[1] }
requirements.flatten!
requirements.uniq!

requirements = requirements.map do |requirement|
  
  requirement = 'http://ajax.googleapis.com/ajax/libs/mootools/1.2.1/mootools.js' if requirement == 'mootools'
  requirement = 'http://ajax.googleapis.com/ajax/libs/mootools/1.2.1/mootools.js' if requirement == 'mootools'
  requirement = 'http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.js' if requirement == 'jquery'
  
  if requirement == 'jsspec'
    requirement = [
      'tm-file://'+ ENV['TM_BUNDLE_SUPPORT']+ '/JSSpec/'+ 'JSSpec.css',
      'tm-file://'+ ENV['TM_BUNDLE_SUPPORT']+ '/JSSpec/'+ 'diff_match_patch.js',
      'tm-file://'+ ENV['TM_BUNDLE_SUPPORT']+ '/JSSpec/'+ 'JSSpec.js'
    ]
  end
  
  requirement
end.flatten

requirements.uniq.each do |requirement|
  requirement = 'tm-file://' + File.dirname(ENV['TM_FILEPATH']) +'/'+ requirement if requirement =~ /^(?!\/|https?:|(tm-)?file:\/\/)/
  
  print %{<script src="#{requirement}" type="text/javascript" charset="utf-8"></script>\n} unless requirement =~ /\.css$/
  
  print <<-CSS if requirement =~ /\.css$/
  <style type="text/css">
    @import url('#{requirement}');
  </style>
  CSS
end

print <<-HTML
<script>
$DIALOG = '"#{ENV['DIALOG']}"';
try{throw {}}catch(e){ window.__line=(e.line||0) };try{
/*----  YOUR CODE ----*/



#$YOURCODE



/*---- /YOUR CODE ----*/
}catch(e){
  var __line_offset = #{ENV['TM_INPUT_START_LINE'] || 1};
  var line = (e.line||1) - __line-5 + __line_offset;
  var path = "#{ENV['TM_FILEPATH']}";
  var error = (path +':'+ line +"\\n"+ (e.message||''));
  var txmturl = ['txmt://open?url=file://', path, '&line=', line].join('');
  
  window.confirm(error) && 
    TextMate.system('open "'+ txmturl +'"', null) &&
    console.log('open "'+ txmturl +'"')
  ;
  console.error(error);
  throw e;
};
</script>

</body>
</html>
HTML

__END__
